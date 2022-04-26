import store from '@/store'

export default function auth ({ next }) {
    if (!store.getters['auth/authenticated']) {
        return next({ path: '/auth/login' })
    }

    return next()
}
