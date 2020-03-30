<template>
  <div class="app-container">
    <body>
      <p>PTA连续期货日K线近期数据变化表</p>
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
      <el-table-column label="开盘价">
        <template slot-scope="scope">
          {{ scope.row.opening }}
        </template>
      </el-table-column>
      <el-table-column label="收盘价">
        <template slot-scope="scope">
          {{ scope.row.closing }}
        </template>
      </el-table-column>
      <el-table-column label="最高价">
        <template slot-scope="scope">
          {{ scope.row.high }}
        </template>
      </el-table-column>
      <el-table-column label="最低价">
        <template slot-scope="scope">
          {{ scope.row.low }}
        </template>
      </el-table-column>
      <el-table-column label="成交量">
        <template slot-scope="scope">
          {{ scope.row.volume }}
        </template>
      </el-table-column>
      <el-table-column label="持仓量">
        <template slot-scope="scope">
          {{ scope.row.position }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/PTA'

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
