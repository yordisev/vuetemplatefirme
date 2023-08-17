<template>
  <!-- <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Dessert (100g serving)
          </th>
          <th class="text-center text-uppercase">
            Calories
          </th>
          <th class="text-center text-uppercase">
            Fat (g)
          </th>
          <th class="text-center text-uppercase">
            Carbs (g)
          </th>
          <th class="text-center text-uppercase">
            Protein (g)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.dessert"
        >
          <td>{{ item.dessert }}</td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            {{ item.fat }}
          </td>
          <td class="text-center">
            {{ item.carbs }}
          </td>
          <td class="text-center">
            {{ item.protein }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->
  <div>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          offset-md="8"
          md="4"
        >
          <v-text-field
            v-model="search"
            :append-icon="icons.mdiMagnify"
            label="Search"
            single-line
            hide-details
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Table -->
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :items-per-page="3"
      class="table-kitchen-sink"
    >
      <!-- <template #[`item.product.name`]="{item}">
        <div class="d-flex align-center">
          <div>
            <v-img
              :src="item.product.image"
              height="40"
              width="40"
            ></v-img>
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-semibold text-truncate text--primary">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template> -->
      <!-- <template #[`item.date`]="{item}">
        <span class="text-no-wrap">{{ item.date }}</span>
      </template> -->
      <!-- <template #[`item.payment`]="{item}">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="primary--text font-weight-medium">${{ item.payment.paid_amount }}</span>
            <span v-if="item.payment.paid_amount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.received_payment_status }}</span>
        </div>
      </template> -->
       <template #[`item.calories`]="{item}">
        <v-chip
          small
          color="primary"
          class="font-weight-medium"
        >
          {{item.calories }}
        </v-chip>
      </template>
      <template #[`item.fat`]>
      <!-- {{item.fat }} -->
    <v-avatar
      rounded="lg"
      color="info"
    >
      <v-icon size="25" color="white">{{icons.mdiMagnify}}</v-icon>
    </v-avatar>
      </template>
      <template #[`item.delete`]="">
        <a><v-icon>{{ icons.mdiDeleteOutline }}</v-icon></a>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify,mdiDeleteOutline } from '@mdi/js'
export default {
  setup() {
    const search = ref('')
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
       headers: [
        { text: 'dessert', value: 'dessert' },
        { text: 'calories', value: 'calories' },
        { text: 'fat', value: 'fat' },
        { text: 'carbs', value: 'carbs' },
        { text: 'protein', value: 'protein' },
        { text: 'eliminar', value: 'delete', sortable: false },
      ],
      desserts,
      search,
      icons: {
        mdiMagnify,
        mdiDeleteOutline,
      },
    }
  },
}
</script>
