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
      <el-table-column label="华东地区">
        <template slot-scope="scope">
          {{ scope.row.prices.华东地区.价格 }}
        </template>
      </el-table-column>
      <el-table-column label="华南地区">
        <template slot-scope="scope">
          {{ scope.row.prices.华南地区.价格 }}
        </template>
      </el-table-column>
      <el-table-column label="华北地区">
        <template slot-scope="scope">
          {{ scope.row.prices.华北地区.价格 }}
        </template>
      </el-table-column>
      <el-table-column label="西南地区">
        <template slot-scope="scope">
          {{ scope.row.prices.东北地区.价格 }}
        </template>
      </el-table-column>
      <el-table-column label="东北地区">
        <template slot-scope="scope">
          {{ scope.row.prices.西南地区.价格 }}
        </template>
      </el-table-column>
    </el-table>
    <el-divider />
    <body>
      <p>BOPP走势分析预测（{{ list[0].date }}）</p>
      <p>
        <span style="margin-left:30px;">
          {{ list[0].forecast }}
        </span>
      </p>
    </body>
  </div>
</template>

<script>
import { getList } from '@/api/BOPP'

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
