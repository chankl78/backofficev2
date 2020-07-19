<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-official">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fas fa-bars"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-avatar>
            <q-img
                src="icons/icon-256x256.png"
                contain
                no-default-spinner
                transition="rotate"
              />
          </q-avatar>
          SSASoft BackOffice
        </q-toolbar-title>
        <q-btn
          :icon="$q.dark.isActive ? 'fas fa-sun' : 'far fa-sun'"
          flat
          dense
          round
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
          no-caps
        />
        <q-btn
          color="bg-official"
          to="/auth"
          :icon-right="$q.dark.isActive ? 'fas fa-user-circle' : 'far fa-user-circle'"
          label="Login"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :content-class="$q.dark.isActive ? '' :'bg-grey-3'"
    >
      <div class="q-pa-md" style="max-width: 350px">
        <q-list>
          <q-expansion-item group="navigation" popup icon="fas fa-tachometer-alt" label="Dashboard" exact clickable v-ripple to="/">
            <q-separator />
          </q-expansion-item>
          <q-expansion-item group="navigation" popup icon="fas fa-sliders-h" label="Settings">
            <q-separator />
            <q-list bordered separator>
              <q-item exact clickable v-ripple to="/settingsuseraccount">
                <q-item-section>Accounts</q-item-section>
              </q-item>
              <q-item exact clickable v-ripple to="/settings">
                <q-item-section>
                  <q-item-label>Settings</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item group="navigation" popup icon="fas fa-bookmark" label="Events">
            <q-separator />
            <q-list bordered separator>
              <q-item exact clickable v-ripple to="/settingsuseraccount">
                <q-item-section>Listing</q-item-section>
              </q-item>
              <q-item exact clickable v-ripple to="/settings">
                <q-item-section>
                  <q-item-label>M&D Training Course</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item group="navigation" popup icon="fas fa-users" label="Groups">
            <q-separator />
            <q-list bordered separator>
              <q-item exact clickable v-ripple to="/settingsuseraccount">
                <q-item-section>Listing</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item group="navigation" popup icon="fas fa-compass" label="Campaigns">
            <q-separator />
            <q-list bordered separator>
              <q-item exact clickable v-ripple to="/settingsuseraccount">
                <q-item-section>Listing</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item group="navigation" popup icon="fas fa-cloud-sun-rain" label="Attendance">
            <q-separator />
            <q-list bordered separator>
              <q-item exact clickable v-ripple to="/settingsuseraccount">
                <q-item-section>Listing</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item group="navigation" popup icon="fas fa-id-card" label="Members">
            <q-separator />
            <q-list bordered separator>
              <q-item exact clickable v-ripple to="/settingsuseraccount">
                <q-item-section>Listing</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item group="navigation" popup icon="fas fa-people-arrows" label="Visiting">
            <q-separator />
            <q-list bordered separator>
              <q-item exact clickable v-ripple to="/settingsuseraccount">
                <q-item-section>Listing</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Main',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
.q-drawer .q-router-link--exact-active {
  color: rgb(183, 0, 255) !important;
}

.q-header .background-color {
  color: #0a0f4f;
}
</style>
