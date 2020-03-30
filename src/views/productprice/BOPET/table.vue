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
      <el-table-column label="12μ印刷膜/镀铝基材">
        <template slot-scope="scope">
          {{ scope.row.prices.镀铝基材.price }}
        </template>
      </el-table-column>
      <el-table-column label="烫金膜">
        <template slot-scope="scope">
          {{ scope.row.prices.烫金膜.price }}
        </template>
      </el-table-column>
      <el-table-column label="转移膜">
        <template slot-scope="scope">
          {{ scope.row.prices.转移膜.price }}
        </template>
      </el-table-column>
      <el-table-column label="厚膜">
        <template slot-scope="scope">
          {{ scope.row.prices.厚膜.price }}
        </template>
      </el-table-column>
    </el-table>
    <el-divider />
    <body>
      <p>期货市场（{{ list[0].date }}）</p>
      <p>
        <span style="margin-left:30px;">
          {{ list[0].forecast }}
        </span>
      </p>
    </body>
  </div>
</template>

<script>
import { getList } from '@/api/BOPET'

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
