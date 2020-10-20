<template>
  <d2-container>
    <template slot="header">已入库样品</template>
  <div style="margin-top: 0px">
    <el-button
      icon="el-icon-download"
      size="mini"
      type="warning"
      tooltip-effect="dark"
      >批量下载报告</el-button
    >
    <el-button
      icon="el-icon-upload el-icon-right"
      size="mini"
      type="primary"
      @click="fRuku"
      >移入历史记录</el-button>
</div>

    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      style="width: 100%; margin-top: 20px"
      @selection-change="handleSelectionChange"
      >
       <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="id"
        label="病人姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="病区"
        width="80">
      </el-table-column>
      <el-table-column
        prop="fileurl"
        label="文件名">
      </el-table-column>
     
      <el-table-column
        label="操作">
        <el-button size="mini" round>查看图谱</el-button> 
        <el-button size="mini" round>生物标志物</el-button> 
        <el-button size="mini" round>聚类分析</el-button>
        <el-button size="mini" round>归一化</el-button>
        <el-button type= "primary" size= "mini" round>查看报告</el-button>
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'processList',
  data() {
      return {
        tableData: [{
          id: '小宝',
          name: 'B2',
          fileurl: 'D2_阴性质控_D2.spectrum'
         
        }, {
          id: '小宝',
          name: 'B2',
          fileurl: 'D2_阴性质控_D3.spectrum'
         
        }, {
          id: '李明',
          name: 'B2',
          fileurl: 'D2_阴性质控_D4.spectrum'
         
        }, {
          id: '李明',
          name: 'A1',
          fileurl: 'D2_阴性质控_D5.spectrum'
          
        }, {
          id: '大宝',
          name: 'A1',
          fileurl: 'D2_阴性质控_D6.spectrum'
        
        }, {
          id: '大宝',
          name: 'A1',
          fileurl: 'D2_阴性质控_D7.spectrum'
        
        }]
      };
    },
methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 1 || columnIndex === 0 || columnIndex === 2) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
      }
}
</script>
