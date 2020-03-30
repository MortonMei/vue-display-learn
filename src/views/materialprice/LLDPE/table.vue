<template>
  <div class="app-container">
    <body>
      <p>大宗商品聚乙烯LLDPE标杆价格变化表</p>
    </body>
    <el-divider />
    <el-table
      v-loading="listLoading"
      :data="headdata"
      element-loading-text="Loading"
      height="150"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="日期" fixed>
        <template slot-scope="scope">
          {{ scope.row }}
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item,index) in list"
        :key="index"
        :label="item.date"
        width="100"
      >
        {{ item.price }}
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/LLDPE'

export default {
  data() {
    return {
      headdata: ['价格'],
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
