<template>
  <v-row justify="center" align="center">
    <v-col cols="10" class="itensHistoryGeral">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Data
              </th>
              <th class="text-left">
                Horário
              </th>
              <th class="text-left">
                Laboratório
              </th>
              <th class="text-left">
                Sensor
              </th>
              <th class="text-left">
                Dado
              </th>
              <th class="text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 19" :key="i">
              <td>{{ dados[0].date }}</td>
              <td>{{ dados[0].time[i - 1] }}</td>
              <td>{{ dados[0].laboratory }}</td>
              <td>{{ dados[0].sensor }}</td>
              <td>{{ dados[0].given[i - 1] }}°C</td>
              <td v-if="dados[0].given[i - 1] > 36">
                <v-row justify="center" align="center">
                  <div class="ballRed" />
                </v-row>
              </td>
              <td v-else>
                <v-row justify="center" align="center">
                  <div class="ballGreen" />
                </v-row>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <div class="text-center itensHistoryGeral">
      <v-pagination
        color="#3ab63e"
        v-model="page"
        :length="4"
        circle
      ></v-pagination>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      dados: [
        {
          date: '08/09/2021',
          time: [
            '6:00',
            '7:00',
            '8:00',
            '9:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
            '24:00',
          ],
          laboratory: 'Laboratório Central',
          sensor: 'Temperatura',
          given: [
            10,
            20,
            30,
            40,
            50,
            60,
            70,
            60,
            50,
            40,
            30,
            20,
            10,
            20,
            30,
            40,
            50,
            60,
            70,
          ],
          status: '',
          description: '',
        },
      ],
    }
  },
}
</script>

<style scoped>
.itensHistoryGeral {
  padding: 50px 0px 50px 0px;
}
.itensHistory {
  padding: 0;
}

.ballRed {
  height: 15px;
  width: 15px;
  background-color: brown;
  border-radius: 10px;
}
.ballGreen {
  height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 10px;
}
</style>
