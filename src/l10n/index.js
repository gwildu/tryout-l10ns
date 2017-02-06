'use strict'
import Vue from 'vue'
import localizationFactory from '../../dist/l10ns/all.js'
import l10n from 'ricardo-vue_l10n'

Vue.use(l10n, { factory: localizationFactory })

export default {}
