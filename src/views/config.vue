<template>
  <div class="app-container">    
    <el-form ref="dataForm" :rules="rules" :model="temp" label-position="right" label-width="110px" style="width: 600px; margin-left:230px;">
      <div>
        <el-form-item label="姓名" prop="username">
          <el-input v-model="temp.username" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="temp.phone" placeholder="手机号" />
        </el-form-item>        
        <el-form-item label="省份" prop="province">
          <el-select v-model="temp.province" class="filter-item" placeholder="Please select">
            <el-option key="130" label="河北" value="130"/>
          </el-select>
        </el-form-item>        
        <el-button type="success" style="margin-left: 100px;" @click="save">保存</el-button>
      </div>      
    </el-form>
  </div>
</template>
<script>
import { submitAction, checkName, AcitonDetail, editAction } from '@/api/action'
import waves from '@/directive/waves' // waves directive
import { BaseUrl } from '@/utils'
import Cookies from 'js-cookie'
export default {
  name: '',
  directives: { waves },
  data() {
    const validatePass = (rule, value, callback) => {
      var obj = { 'phone': this.temp.phone };
      var mobile = /^1[3|4|5|7|8]\d{9}$/; 
      if(mobile.test(value)){
        checkName(obj).then(response => {
        if (response.data[0]) {
          callback()
        } else {
          callback(new Error('手机号码已注册'))
        }
      })
      }else{
          callback(new Error('请输入正确的手机号码'))
      }
      
    }
    return {
      temp:{
        id: '',
        username:'',
        phone:'',
        province:'130',
      },      
      rules: {
        username: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 5,
          message: '长度在 2 到 5 个字符',
          trigger: 'blur'
        }
        ],
        phone:[
          {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        {
          required: true,
          trigger: 'blur',
          validator: validatePass
        }]
      }
    }
  },
  created() {
    this.id = this.$route.params.id
    this.initData()
  },
  methods: {
    editInit(id) {
      AcitonDetail(id).then(response => {
        this.temp = response.rows[0]
      })
    },       
    save() {
      this.submit();
    },    
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    submit() {
      var that = this
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          if (that.id) {
            that.temp.id = that.id
            editAction(this.temp).then(response => {
              if (response.errorCode == 0) {
                this.$message({
                  message: '修改动作成功！',
                  type: 'success'
                })
                setTimeout(() => {
                  that.$router.push('/')
                }, 2000)
              }
            })
          } else {
            submitAction(this.temp).then(response => {
              if (response.errorCode == 0) {
                this.$message({
                  message: '添加高考规划师成功！',
                  type: 'success'
                })
                setTimeout(() => {
                  that.$router.push('/')
                }, 2000)
              }
            })
          }
        }
      })
    },
  }
}
</script>
