<template>
  <d2-container>
    <template slot="header">待入库图谱</template>
   <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="tabledata"
      selection-row
      @selection-change="handleSelectionChange">
      <el-button icon="el-icon-download"  size = "mini" slot="header" style="margin-bottom: 5px" type="primary">数据下载</el-button>
      <el-button icon="el-icon-upload el-icon-right"  size = "mini" slot="header" type="primary"  style="margin-bottom: 5px">样品入库</el-button>
    </d2-crud>
  </div>
  </d2-container>
</template>

<script>
export default {
  name: 'waitList',
   data () {
    return {
      columns: [
        {
          title: '生成日期',
          key: 'date',
          width: '180'
        },
        {
          title: '文件名',
          key: 'name',
          width: '400'
        },
        {
          title: '备注信息',
          key: 'address'
        }
      ],
      // 可以通过 this.$refs.d2Crud.d2CrudData 拿到变化后的表格数据
      tabledata: [
        {
          date: '2020-05-02',
          name: 'D2_阴性质控_D2.spectrum',
          address: 'jqtang'
        },
        {
          date: '2020-05-04',
          name: 'D5_阴性质控_D5.spectrum',
          address: 'jqtang'
        },
        {
          date: '2020-05-01',
          name: 'D3_阴性质控_D3.spectrum',
          address: '文件的备注信息'
        },
        {
          date: '2020-05-03',
          name: 'D4_阴性质控_D4.spectrum',
          address: '文件的备注信息'
        }
      ]
    }
  },  
 methods: {
    handleSelectionChange (selection) {
      console.log(selection)
    }
  }
}
</script>
