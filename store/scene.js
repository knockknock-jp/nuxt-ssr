export const state = () => ({
  scene: null
})

export const mutations = {
  change (state, scene) {
    state.scene = scene;
  }
}
