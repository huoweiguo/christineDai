import { createHashRouter, createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'

const Story = lazy(() => import('../views/Story/Story'))
const Jewelry = lazy(() => import('../views/Jewelry/Jewelry'))
const Documentary = lazy(() => import('../views/Documentary/Documentary'))
const Video = lazy(() => import('../views/Video/Video'))
const GlobalMedia = lazy(() => import('../views/GlobalMedia/GlobalMedia'))
const ContactUs = lazy(() => import('../views/ContactUs/ContactUs'))
const TheJewelry = lazy(() => import('../views/TheJewelry/TheJewelry'))
const JewelryList = lazy(() => import('../views/JewelryList/JewelryList'))
const JewelryDetail = lazy(() => import('../views/JewelryDetail/JewelryDetail'))
const WholeVideo = lazy(() => import('../views/WholeVideo/WholeVideo'))
const MediaDetail = lazy(() => import('../views/MediaDetail/MediaDetail'))
const VideoDetail = lazy(() => import('../views/VideoDetail/VideoDetail'))
const Layout = lazy(() => import('../views/Layout/Layout'))
const BeforeEach = lazy(() => import('../components/BeforeEach/BeforeEach'))

declare module 'react-router-dom' {
  interface IndexRouteObject {
    meta?: {
      menu?: boolean
      title?: string
      icon?: React.ReactNode
      auth?: boolean
    }
  }

  interface NonIndexRouteObject {
    meta?: {
      menu?: boolean // 是否显示当前菜单
      title?: string // 菜单名称
      icon?: React.ReactNode // 菜单对应小图标
      auth?: boolean // 菜单是否拥有权限
    }
  }
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(BeforeEach, null, React.createElement(Layout)),
    children: [
      {
        path: 'story',
        element: React.createElement(Story),
        meta: {
          menu: true,
          title: '品牌故事',
          auth: true
        }
      },
      {
        path: 'jewelry',
        element: React.createElement(Jewelry),
        meta: {
          menu: true,
          title: '艺术珠宝'
        }
      },
      {
        path: 'documentary',
        element: React.createElement(Documentary),
        meta: {
          menu: true,
          title: '品牌纪事'
        }
      },
      {
        path: 'video',
        element: React.createElement(Video),
        meta: {
          menu: true,
          title: '视频'
        }
      },
      {
        path: 'globalMedia',
        element: React.createElement(GlobalMedia),
        meta: {
          menu: true,
          title: '全球媒体'
        }
      },
      {
        path: 'contactUs',
        element: React.createElement(ContactUs),
        meta: {
          title: '联系我们'
        }
      },
      {
        path: 'theJewelry/:id',
        element: React.createElement(TheJewelry),
        meta: {
          title: '珠宝分类'
        }
      },
      {
        path: 'jewelryList/:id',
        element: React.createElement(JewelryList),
        meta: {
          title: '珠宝列表'
        }
      },
      {
        path: 'jewelryDetail',
        element: React.createElement(JewelryDetail),
        meta: {
          title: '珠宝详情'
        }
      },
      {
        path: 'wholeVideo/:id',
        element: React.createElement(WholeVideo),
        meta: {
          title: '视频分类'
        }
      },
      {
        path: 'mediaDetail',
        element: React.createElement(MediaDetail),
        meta: {
          title: '媒体详情'
        }
      },
      {
        path: 'videoDetail',
        element: React.createElement(VideoDetail),
        meta: {
          title: '视频详情'
        }
      }
    ]
  }
]
const router = createBrowserRouter(routes)

export default router