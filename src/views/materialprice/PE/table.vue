<template>
  <div class="app-container">
    <body>
      <p>PE出厂：国内中石化出厂产品近期收盘价格变化表（元/吨）</p>
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
      <el-table-column label="日期">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="上海石化膜料">
        <template slot-scope="scope">
          {{ scope.row.price1 }}
        </template>
      </el-table-column>
      <el-table-column label="扬子石化膜料">
        <template slot-scope="scope">
          {{ scope.row.price2 }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/PE'

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
