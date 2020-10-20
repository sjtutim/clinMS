<template>
  <d2-container>
    <template slot="header">系统参数设置</template>
    <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="系统参数" name="1">
    <el-form ref="form" :model="form" label-width="200px">
 <el-form-item label="设定图谱原始文件地址">
    <el-input v-model="form.name" placeholder="c:\data\cliMS\data\" style="width: 80%;"></el-input>
  </el-form-item>
  <el-form-item label="参数设置">
    <el-select v-model="form.region" placeholder="选择参数">
      <el-option label="参数1" value="0.002"></el-option>
      <el-option label="参数2" value="0.003"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item  label="自动归档设置">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button size= "mini"  @click="onSubmit">立即保存</el-button>
  </el-form-item>
</el-form>
  </el-collapse-item>
  <el-collapse-item title="个人信息设置" name="2">
   <el-form ref="form" :model="form" label-width="200px">
 <el-form-item label="登录名">
    <el-input style="width: 40%;" value="Admin"  :disabled="true" ></el-input>
  </el-form-item>
 <el-form-item label="原密码">
    <el-input v-model="form.name" placeholder="******" style="width: 40%;" ></el-input>
  </el-form-item>
 <el-form-item label="新密码">
    <el-input v-model="form.name" style="width: 40%;"></el-input>
  </el-form-item>
   <el-form-item label="确认密码">
    <el-input v-model="form.name" style="width: 40%;"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button size= "mini"  @click="onSubmit">立即保存</el-button>
  </el-form-item>
</el-form>
  </el-collapse-item>
  <el-collapse-item title="预留1" name="3">
    预留功能模块
  </el-collapse-item>
  <el-collapse-item title="预留2" name="4">
   预留功能模块2
  </el-collapse-item>
</el-collapse>


   
  </d2-container>
</template>

<script>
export default {
  name: "sysEdit",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      activeNames: ['1','2']

    }
  },
  methods: {
    onSubmit() {
        console.log('submit!');
      }
  },
};
</script>