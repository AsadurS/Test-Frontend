import store from '@/store'

export default function auth ({ next }) {
    if (store.state.auth.token==null || store.state.auth.user ==null) {
        return next({ path: '/auth/login' })
    }

    return next()
}
