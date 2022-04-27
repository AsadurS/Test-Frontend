import store from '@/store'

export default function authenticated ({ next }) {
    if (store.state.auth.token && store.state.auth.user) {
        return next({ name: 'dashboard' })
    }

    return next()
}
