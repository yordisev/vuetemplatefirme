<template>
<v-card class="ma-2 pb-5 px-4">
    <v-card-title>Headlines</v-card-title>
    <v-dialog v-model="isDialogVisible" width="1200">
      <template #activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Click Me </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field outlined label="First Name" dense></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Middle Name" dense hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Last Name" dense persistent-hint></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email" dense></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field dense label="Password" type="password"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age" dense></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  dense
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" outlined @click="isDialogVisible = false"> Close </v-btn>
          <v-btn color="success" @click="isDialogVisible = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="mt-4 demo-space-x">
      <v-btn color="primary" @click="showAlert" dark>
        Swalert
        <v-icon dark right>
          {{ icons2.mdiCheckboxMarkedCircleOutline }}
        </v-icon>
      </v-btn>

      <v-btn color="secondary" @click="isDialogVisible = true" dark>
        <v-icon dark left> {{ icons2.mdiMinusCircleOutline }} </v-icon>Ver Modal
      </v-btn>

      <v-btn color="success" @click="showErrorToast" dark>
        Upload
        <v-icon dark right>
          {{ icons2.mdiCloudUploadOutline }}
        </v-icon>
      </v-btn>

      <v-btn color="info" dark>
        <v-icon dark left> {{ icons2.mdiArrowLeft }} </v-icon>Back
      </v-btn>

      <v-btn color="warning" dark>
        <v-icon dark>
          {{ icons2.mdiWrenchOutline }}
        </v-icon>
      </v-btn>

      <v-btn color="error" dark>
        <v-icon dark>
          {{ icons2.mdiCancel }}
        </v-icon>
      </v-btn>
    </div>
    <v-row class="mt-4">
      <v-col cols="3">
        <v-text-field outlined dense v-model="amount" label="Amount" prefix="$" type="number" />
      </v-col>

      <v-col cols="3">
        <v-text-field outlined dense v-model="weight" label="Weight" suffix="lbs" type="number" />
      </v-col>

      <v-col cols="3">
        <v-text-field v-model="email" label="Email address" suffix="@gmail.com" />
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="time" label="Label Text" type="time" suffix="PST" />
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="3">
        <v-select outlined dense :items="['0-17', '18-29', '30-54', '54+']" label="Density" density="compact" />
      </v-col>
      <v-col cols="3">
        <v-combobox v-model="selectedItem" :items="['yordis', 'escorcia', 'pruebas', 'yoyo']" />
      </v-col>
      <v-col cols="3">
        <v-switch v-model="insetSwitch1" inset :label="`Switch 1: ${insetSwitch1.toString()}`" />
      </v-col>
      <v-col cols="3">
        <v-radio-group v-model="selectedRadio" inline>
          <div>
            <v-radio key="primary" label="primary" color="primary" value="primary" />
            <v-radio key="info" label="info" color="info" value="info" />
          </div>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="3">
        <v-file-input outlined dense chips label="File input" density="compact" />
      </v-col>
      <v-col cols="3" sm="3">
        <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              color="green darken-2"
              v-model="picker"
              label="FECHA INICIO"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              dense
              outlined
            ></v-text-field>
          </template>
          <v-date-picker v-model="picker" @input="menu1 = false" locale="es-es"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiCheckboxMarkedCircleOutline,
  mdiCancel,
  mdiMinusCircleOutline,
  mdiArrowLeft,
  mdiWrenchOutline,
  mdiCloudUploadOutline,
} from '@mdi/js'
export default {
  // setup() {
  //   const isDialogVisible = false
  //   const amount = ref(10.05)
  //   const weight = ref(28.02)
  //   const email = ref('example')
  //   const time = ref('04:56')
  //   const selectedItem = ref('')
  //   const insetSwitch1 = ref(true)
  //   const selectedRadio = ref('primary')
  //   const picker = new Date().toISOString().substr(0, 10)
  //   const menu1 = ref(false)
  //   return {
  //     amount,
  //     weight,
  //     email,
  //     time,
  //     selectedItem,
  //     insetSwitch1,
  //     selectedRadio,
  //     picker,
  //     menu1,
  //     icons2: {
  //       mdiCheckboxMarkedCircleOutline,
  //       mdiCancel,
  //       mdiMinusCircleOutline,
  //       mdiArrowLeft,
  //       mdiWrenchOutline,
  //       mdiCloudUploadOutline,
  //     },

  //     isDialogVisible,
  //   }
  // },
   data() {
    return {
       isDialogVisible: false,
        amount: 10.05,
        weight: 28.02,
        email: 'example',
        time: '04:56',
        selectedItem: '',
        insetSwitch1: true,
        selectedRadio: 'primary',
        picker: new Date().toISOString().substr(0, 10),
        menu1: false,
      icons2: {
        mdiCheckboxMarkedCircleOutline:mdiCheckboxMarkedCircleOutline,
        mdiCancel:mdiCancel,
        mdiMinusCircleOutline:mdiMinusCircleOutline,
        mdiArrowLeft:mdiArrowLeft,
        mdiWrenchOutline:mdiWrenchOutline,
        mdiCloudUploadOutline:mdiCloudUploadOutline,
      },

    }
  },
   methods: {
    showAlert() {
        this.$swal.fire({
  title: 'Do you want to save the changes?',
  icon: 'question',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    this.$swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    this.$swal.fire('Changes are not saved', '', 'info')
  }
})
    },
    showSuccessToast(){
      
    },
    showErrorToast(){
     
    },
  },
}
</script>
<style>
.demo-space-x {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-block-start: -16px;
}
.demo-space-x > * {
  margin-block-start: 16px;
  margin-inline-end: 16px;
}
</style>
