<script>
export default {
  name: 'Calculator',
  data: () => {
    return {
      period: 0
    }
  }
}
</script>

<template>
  <div id="home">
    <div>
      <input v-model="sum" type="number" placeholder="Amount" />
    </div>
    <div>
      <select v-model="period" type="number">
        <option value="0">Choose period:</option>
        <option v-for="month in 12" :value="month" :key="month">
          {{ month }}
        </option>
      </select>
    </div>
    <div v-if="Number(sum) >= 1 && Number(sum) <= 4000">
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
          <th>Rest</th>
        </tr>
        <tr :key="month" v-for="month in period-2">
          <td>{{ month }}</td>
          <td>{{ Math.floor(Number(sum) / period  ) }}</td>
          <td>{{ Math.floor(Number(sum) - (Number(sum) / period) * month) }}</td>
        </tr> 

        <tr :key="period">
          <td>{{ period-1 }}</td>
          <td>{{  Math.floor(Number(sum) / period) }}</td>
          <td v-if=" Math.floor(Number(sum) / period)*period === Number(sum)">{{  Math.floor(Number(sum) / period) }}</td>
          <td v-else>{{ Number( Math.floor(Number(sum) / period))+ Number(Number(sum)- Math.floor(Number(sum) / period)*period)  }}</td>
          
        </tr>

        <tr :key="period">
          <td>{{ period }}</td>
          <td v-if=" Math.floor(Number(sum) / period)*period === Number(sum)">{{  Math.floor(Number(sum) / period) }}</td>
          <td v-else>{{ Number( Math.floor(Number(sum) / period))+ Number(Number(sum)- Math.floor(Number(sum) / period)*period)  }}</td>
          <td>{{ 0 }}</td>
        </tr>
      </table>
    </div>
    <div v-else>Please enter an amount greater than 1 and less than 4000</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .calcContainer {
    align-items: center;
    max-height: 80vh;
    display: flex;
    font-family: 'Kalam', cursive;
    font-family: 'Raleway', sans-serif;
  }
}

input, select, option {
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'Kalam', cursive;
  font-family: 'Raleway', sans-serif;
}

#home{
  font-size: 20px;
  font-family: 'Kalam', cursive;
  font-family: 'Raleway', sans-serif;
}

table{
  width:100%;
  padding:10px;
  background-color:#2e2e2e;
  color:white;
}

td {
  text-align: center;
}
</style>
