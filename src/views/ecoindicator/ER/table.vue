<template>
  <div class="app-container">
    <body>
      <p>中国外汇交易中心授权公布人民币汇率中间价近期统计</p>
    </body>
    <el-divider />
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      height="400"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="Date">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="Eur">
        <template slot-scope="scope">
          {{ scope.row.eur }}
        </template>
      </el-table-column>
      <el-table-column label="Usd">
        <template slot-scope="scope">
          {{ scope.row.usd }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/ER'

export default {
  data() {
    return {
      list: null,
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
