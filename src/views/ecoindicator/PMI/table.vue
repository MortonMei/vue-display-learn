<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      height="300"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column label="月份">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="制造业" align="center">
        <el-table-column label="指数">
          <template slot-scope="scope">
            {{ scope.row.index1 }}
          </template>
        </el-table-column>
        <el-table-column label="同比增长">
          <template slot-scope="scope">
            {{ scope.row.rate1 }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="非制造业" align="center">
        <el-table-column label="指数">
          <template slot-scope="scope">
            {{ scope.row.index2 }}
          </template>
        </el-table-column>
        <el-table-column label="同比增长">
          <template slot-scope="scope">
            {{ scope.row.rate2 }}
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/PMI'

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
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
