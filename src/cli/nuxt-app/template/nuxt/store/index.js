export const state = () => ({})

export const getters = {}

export const actions = {
  <%_ if (isModeUniversal) { _%>
  async nuxtServerInit ({ commit }, context) {},
  <%_ } _%>
  async nuxtClientInit ({ commit }, context) {},
}

export const mutations = {}
