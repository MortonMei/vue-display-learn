<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      height="400"
      border
      fit
      highlight-current-row
    >

      <el-table-column label="日期">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="CPP复合膜" align="center">
        <el-table-column label="华东地区">
          <template slot-scope="scope">
            {{ scope.row.prices2.华东地区.价格 }}
          </template>
        </el-table-column>
        <el-table-column label="华南地区">
          <template slot-scope="scope">
            {{ scope.row.prices2.华南地区.价格 }}
          </template>
        </el-table-column>
        <el-table-column label="华北地区">
          <template slot-scope="scope">
            {{ scope.row.prices2.华北地区.价格 }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="CPP镀铝基材" align="center">
        <el-table-column label="华东地区">
          <template slot-scope="scope">
            {{ scope.row.prices3.华东地区.价格 }}
          </template>
        </el-table-column>
        <el-table-column label="华南地区">
          <template slot-scope="scope">
            {{ scope.row.prices3.华南地区.价格 }}
          </template>
        </el-table-column>
        <el-table-column label="华北地区">
          <template slot-scope="scope">
            {{ scope.row.prices3.华北地区.价格 }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="CPP蒸煮膜" align="center">
        <el-table-column label="华南地区">
          <template slot-scope="scope">
            {{ scope.row.prices1.华东地区.价格 }}
          </template>
        </el-table-column>
        <el-table-column label="华北地区">
          <template slot-scope="scope">
            {{ scope.row.prices1.华北地区.价格 }}
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-divider />
    <body>
      <p>后市预测分析（{{ list[0].date }}）</p>
      <p>
        <span style="margin-left:30px;">
          {{ list[0].forecast }}
        </span>
      </p>
    </body>
  </div>
</template>

<script>
import { getList } from '@/api/CPP'

export default {
  data() {
    return {
      list: [],
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
body {background: darkgrey;padding: 8px 24px;color: #2c3e50;line-height: 25px;}

</style>
