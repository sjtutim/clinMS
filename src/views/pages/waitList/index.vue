<template>
  <d2-container>
    <template slot="header">待入库图谱</template>
     <div style="margin-top: 0px">
    <el-button
      icon="el-icon-download"
      size="mini"
      type="primary"
      tooltip-effect="dark"
      @click="test"
      >数据下载</el-button
    >
    <el-button
      icon="el-icon-upload el-icon-right"
      size="mini"
      type="primary"
      @click="fRuku"
      >选中样品入库</el-button
    >
</div>

    <div class="block">
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="date" label="生成时间" sortable width="180">
      </el-table-column>
      <el-table-column prop="fname" label="文件名" width="450">
      </el-table-column>
      <el-table-column prop="memo" label="备注">
      </el-table-column>
    </el-table>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
    <!-- 抽屉 -->
<el-drawer
  title="入库"
  :visible.sync= "drawer"
  :with-header= "false">
   <div class="demo-drawer__content" style="margin-top: 20px; margin-left:10px;margin-right:10px" >
    <el-form :model="form">
      <el-form-item label="取样时间" :label-width="formLabelWidth">
        <el-input v-model="form.sampledate" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="病人姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="病区选择" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选病房区域">
          <el-option label="B病区" value="shanghai"></el-option>
          <el-option label="C病区" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="demo-drawer__footer">
      <el-button>取 消</el-button>
      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '样品入库' }}</el-button>
    </div>
  </div>
</el-drawer>


  </d2-container>
</template>

<script>
export default {
  name: "waitList",
  data() {
    return {
      drawer: false,
      tableData: [
        {
          date: "2020-05-02",
          fname: "D2_阴性质控_D2.spectrum",
          memo: "jqtang",
        },
        {
          date: "2020-05-04",
          fname: "D5_阴性质控_D5.spectrum",
          memo: "jqtang",
        },
        {
          date: "2020-05-01",
          fname: "D3_阴性质控_D3.spectrum",
          memo: "文件的备注信息",
        },
        {
          date: "2020-05-03",
          fname: "D4_阴性质控_D4.spectrum",
          memo: "文件的备注信息",
        },
        {
          date: "2020-05-03",
          fname: "D4_阴性质控_D4.spectrum",
          memo: "文件的备注信息",
        },
        {
          date: "2020-05-03",
          fname: "D4_阴性质控_D4.spectrum",
          memo: "文件的备注信息",
        },
      ],
      form: {
        sampledate:'',
        name: '',
        region: ''
      },
      formLabelWidth: '80px',
      timer:null,
      multipleSelection: [],
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
      },
    };
  },
  methods: {
    fRuku(){
      this.drawer = true
    },
    handleSelectionChange(val) {
    this.multipleSelection = val;
  },

    test() {
      console.log(this.multipleSelection);
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  //选中数据
  // toggleSelection(rows) {
  //   if (rows) {
  //     rows.forEach((row) => {
  //       this.$refs.filterTable.toggleRowSelection(row);
  //     });
  //   } else {
  //     this.$refs.filterTable.clearSelection();
  //   }
  // },

};
</script>
