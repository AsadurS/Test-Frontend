import store from '@/store'

export default function authenticated ({ next }) {
    if (store.getters['Auth/authenticated']) {
        return next({ name: 'dashboard' })
    }

    return next()
}
