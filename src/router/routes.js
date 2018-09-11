const Index = () => import('@/pages/index')
const Counter = () => import('@/pages/counter')
export default [
  {
    alias: '/',
    path: '/pages/index',
    name: 'Index',
    component: Index,
    meta: {
      nav: true
    }
  },
  {
    path: '/pages/counter',
    name: 'Counter',
    component: Counter,
    meta: {
      nav: true
    }
  }
]
