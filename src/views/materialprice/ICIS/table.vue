<template>
  <div class="app-container">
    <body>
      <p>BOPP Film:CTR China Import近期价格变化统计————ICIS</p>
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
      <el-table-column label="最高价格">
        <template slot-scope="scope">
          {{ scope.row.priceMax }}
        </template>
      </el-table-column>
      <el-table-column label="最低价格">
        <template slot-scope="scope">
          {{ scope.row.priceMin }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/ICIS'

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
