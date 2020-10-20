<template>
  <d2-container>
    <template slot="header">历史记录</template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="日期">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="病人姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="图谱文件">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="样品类型">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="样品描述">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="样品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="病区">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="其他备注">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      prop="id"
      width="100">
    </el-table-column>
    <el-table-column
      label="病人姓名"
      prop="name"
      width="80">
    </el-table-column>
    <el-table-column
      label="样品描述"
      prop="desc">
    </el-table-column>
     <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看报告</el-button>
       
      </template>
    </el-table-column>
  </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'historyList',
   data() {
      return {
        tableData: [{
          id: '2020-09-21',
          name: '程VV',
          category: '病人详细信息',
          desc: '点击查看样品备案信息',
          address: 'B2',
          shop: 'D2_阴性质控_D4.spectrum',
          shopId: '10333'
        }, {
          id: '2020-09-21',
          name: '陈XX',
          category: '',
          desc: '点击查看样品备案信息',
          address: 'B3',
          shop: 'D2_阴性质控_D4.spectrum',
          shopId: '10333'
        }, {
          id: '2020-09-21',
          name: '王X',
          category: '',
          desc: '点击查看样品备案信息',
          address: 'B4',
          shop: 'D2_阴性质控_D4.spectrum',
          shopId: '10333'
        }, {
          id: '2020-09-21',
          name: '张三',
          category: '',
          desc: '点击查看样品备案信息',
          address: 'B5',
          shop: 'D2_阴性质控_D4.spectrum',
          shopId: '10333'
        }]
      }
    }// 


}
</script>

<style scoped>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>