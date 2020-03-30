<template>
  <div class="app-container">
    <body>
      <p>中国国内国民生产总值(GDP)季度绝对值变化表</p>
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
      <!-- <el-table-column align="center" label="ID" width="70">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column> -->
      <el-table-column label="月份">
        <template slot-scope="scope">
          {{ scope.row.time }}
        </template>
      </el-table-column>
      <el-table-column label="国内生产总值" align="center">
        <el-table-column label="绝对值（亿元）">
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
      <el-table-column label="第一产业" align="center">
        <el-table-column label="绝对值（亿元）">
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
      <el-table-column label="第二产业" align="center">
        <el-table-column label="绝对值（亿元）">
          <template slot-scope="scope">
            {{ scope.row.index3 }}
          </template>
        </el-table-column>
        <el-table-column label="同比增长">
          <template slot-scope="scope">
            {{ scope.row.rate3 }}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="第三产业" align="center">
        <el-table-column label="绝对值（亿元）">
          <template slot-scope="scope">
            {{ scope.row.index4 }}
          </template>
        </el-table-column>
        <el-table-column label="同比增长">
          <template slot-scope="scope">
            {{ scope.row.rate4 }}
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/GDP'

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
