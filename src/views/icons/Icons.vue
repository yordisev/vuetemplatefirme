<template>
  <div id="icons-container">
    <div class="d-flex align-center flex-wrap">
      <v-tooltip v-for="item in iconsList" :key="item.icon" top>
        <template v-slot:activator="{ on, attrs }">
          <v-card v-bind="attrs" class="icons-card mb-6 me-6" v-on="on">
            <v-card-text class="py-3 px-4">
              <v-icon size="30">
                {{ item.icon }}
              </v-icon>
            </v-card-text>
          </v-card>
        </template>
        <span>{{ item.name }}</span>
      </v-tooltip>
    </div>

    <!-- more icons -->
    <div class="text-center">
      <v-btn href="https://materialdesignicons.com/" target="_blank" rel="nofollow" color="primary">
        View All Material Design Icons
      </v-btn>
    </div>
    <v-dialog v-model="isDialogVisible" width="500">
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
      <v-btn color="primary" dark>
        Accept
        <v-icon dark right>
          {{ icons2.mdiCheckboxMarkedCircleOutline }}
        </v-icon>
      </v-btn>

      <v-btn color="secondary" dark>
        <v-icon dark left>
          {{ icons2.mdiMinusCircleOutline }} </v-icon
        >Cancel
      </v-btn>

      <v-btn color="success" dark>
        Upload
        <v-icon dark right>
          {{ icons2.mdiCloudUploadOutline }}
        </v-icon>
      </v-btn>

      <v-btn color="info" dark>
        <v-icon dark left>
          {{ icons2.mdiArrowLeft }} </v-icon
        >Back
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
  </div>
</template>

<script>
import {
  mdiCheckboxMarkedCircleOutline,
  mdiCancel,
  mdiMinusCircleOutline,
  mdiArrowLeft,
  mdiWrenchOutline,
  mdiCloudUploadOutline,
  mdiMagnify,
  mdiAbTesting,
  mdiAbacus,
  mdiAbjadArabic,
  mdiAbjadHebrew,
  mdiAbugidaDevanagari,
  mdiAbugidaThai,
  mdiAccessPoint,
  mdiAccessPointCheck,
  mdiAccessPointMinus,
  mdiAccessPointNetwork,
  mdiAccessPointNetworkOff,
  mdiAccessPointOff,
  mdiAccessPointPlus,
  mdiAccessPointRemove,
  mdiAccountAlertOutline,
  mdiAccountArrowLeftOutline,
  mdiAccountArrowRightOutline,
  mdiAccountBoxMultipleOutline,
  mdiAccountBoxOutline,
  mdiAccountCancelOutline,
  mdiAccountCashOutline,
  mdiAccountCheckOutline,
  mdiAccountChildOutline,
  mdiAccountCircleOutline,
  mdiAccountClockOutline,
  mdiAccountCogOutline,
  mdiAccountDetailsOutline,
  mdiAlarmLightOutline,
  mdiAlertBoxOutline,
  mdiAlertCircleCheckOutline,
  mdiAlertDecagramOutline,
  mdiAlertMinusOutline,
  mdiAlertOutline,
  mdiAlertPlusOutline,
  mdiCheckOutline,
  mdiClipboardOutline,
  mdiClipboardPlayOutline,
  mdiCloseOutline,
  mdiCloudCheckOutline,
  mdiCloudDownloadOutline,
  mdiCogOutline,
  mdiCompassOffOutline,
  mdiContactlessPaymentCircleOutline,
  mdiCrownOutline,
  mdiDeleteOutline,
  mdiDiamondOutline,
  mdiEmailOpenOutline,
  mdiEmoticonHappyOutline,
  mdiFileMultipleOutline,
  mdiFlaskEmptyOutline,
} from '@mdi/js'

export default {
  setup() {
    // icons list
    const isDialogVisible = false
    const iconsList = [
      { icon: mdiAbTesting, name: 'mdiAbTesting' },
      { icon: mdiAbacus, name: 'mdiAbacus' },
      { icon: mdiAbjadArabic, name: 'mdiAbjadArabic' },
      { icon: mdiAbjadHebrew, name: 'mdiAbjadHebrew' },
      { icon: mdiAbugidaDevanagari, name: 'mdiAbugidaDevanagari' },
      { icon: mdiAbugidaThai, name: 'mdiAbugidaThai' },
      { icon: mdiAccessPoint, name: 'mdiAccessPoint' },
      { icon: mdiAccessPointCheck, name: 'mdiAccessPointCheck' },
      { icon: mdiAccessPointMinus, name: 'mdiAccessPointMinus' },
      { icon: mdiAccessPointNetwork, name: 'mdiAccessPointNetwork' },
      { icon: mdiAccessPointNetworkOff, name: 'mdiAccessPointNetworkOff' },
      { icon: mdiAccessPointOff, name: 'mdiAccessPointOff' },
      { icon: mdiAccessPointPlus, name: 'mdiAccessPointPlus' },
      { icon: mdiAccessPointRemove, name: 'mdiAccessPointRemove' },
      { icon: mdiAccountAlertOutline, name: 'mdiAccountAlertOutline' },
      { icon: mdiAccountArrowLeftOutline, name: 'mdiAccountArrowLeftOutline' },
      { icon: mdiAccountArrowRightOutline, name: 'mdiAccountArrowRightOutline' },
      { icon: mdiAccountBoxMultipleOutline, name: 'mdiAccountBoxMultipleOutline' },
      { icon: mdiAccountBoxOutline, name: 'mdiAccountBoxOutline' },
      { icon: mdiAccountCancelOutline, name: 'mdiAccountCancelOutline' },
      { icon: mdiAccountCashOutline, name: 'mdiAccountCashOutline' },
      { icon: mdiAccountCheckOutline, name: 'mdiAccountCheckOutline' },
      { icon: mdiAccountChildOutline, name: 'mdiAccountChildOutline' },
      { icon: mdiAccountCircleOutline, name: 'mdiAccountCircleOutline' },
      { icon: mdiAccountClockOutline, name: 'mdiAccountClockOutline' },
      { icon: mdiAccountCogOutline, name: 'mdiAccountCogOutline' },
      { icon: mdiAccountDetailsOutline, name: 'mdiAccountDetailsOutline' },
      { icon: mdiAlarmLightOutline, name: 'mdiAlarmLightOutline' },
      { icon: mdiAlertBoxOutline, name: 'mdiAlertBoxOutline' },
      { icon: mdiAlertCircleCheckOutline, name: 'mdiAlertCircleCheckOutline' },
      { icon: mdiAlertDecagramOutline, name: 'mdiAlertDecagramOutline' },
      { icon: mdiAlertMinusOutline, name: 'mdiAlertMinusOutline' },
      { icon: mdiAlertOutline, name: 'mdiAlertOutline' },
      { icon: mdiAlertPlusOutline, name: 'mdiAlertPlusOutline' },
      { icon: mdiCheckOutline, name: 'mdiCheckOutline' },
      { icon: mdiClipboardOutline, name: 'mdiClipboardOutline' },
      { icon: mdiClipboardPlayOutline, name: 'mdiClipboardPlayOutline' },
      { icon: mdiCloseOutline, name: 'mdiCloseOutline' },
      { icon: mdiCloudCheckOutline, name: 'mdiCloudCheckOutline' },
      { icon: mdiCloudDownloadOutline, name: 'mdiCloudDownloadOutline' },
      { icon: mdiCogOutline, name: 'mdiCogOutline' },
      { icon: mdiCompassOffOutline, name: 'mdiCompassOffOutline' },
      { icon: mdiContactlessPaymentCircleOutline, name: 'mdiContactlessPaymentCircleOutline' },
      { icon: mdiCrownOutline, name: 'mdiCrownOutline' },
      { icon: mdiDeleteOutline, name: 'mdiDeleteOutline' },
      { icon: mdiDiamondOutline, name: 'mdiDiamondOutline' },
      { icon: mdiEmailOpenOutline, name: 'mdiEmailOpenOutline' },
      { icon: mdiEmoticonHappyOutline, name: 'mdiEmoticonHappyOutline' },
      { icon: mdiFileMultipleOutline, name: 'mdiFileMultipleOutline' },
      { icon: mdiFlaskEmptyOutline, name: 'mdiFlaskEmptyOutline' },
    ]

    return {
      icons2: {
        mdiCheckboxMarkedCircleOutline,
        mdiCancel,
        mdiMinusCircleOutline,
        mdiArrowLeft,
        mdiWrenchOutline,
        mdiCloudUploadOutline,
      },
      iconsList,
      icons: {
        mdiMagnify,
      },
      isDialogVisible,
    }
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
