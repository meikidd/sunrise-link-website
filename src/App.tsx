import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppEn from './App-en'
import AppZh from './App-zh'

// SEO Meta 更新组件
function SEOMetaUpdater() {
  const location = useLocation()

  useEffect(() => {
    const isZh = location.pathname.startsWith('/zh')

    // 更新 html lang 属性
    document.documentElement.lang = isZh ? 'zh-Hans' : 'en'

    // 更新 title
    document.title = isZh
      ? '日升女佣 - 新加坡值得信赖的女佣中介 | 女佣、老人护理、儿童看护'
      : 'Sunrise Link - Trusted Helper Agency in Singapore | Domestic Helpers, Eldercare & Childcare'

    // 更新 meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', isZh
        ? '日升女佣是新加坡值得信赖的女佣中介，提供经验证的家庭女佣、老人护理专家和儿童看护服务。24/7全天候支持，轻松无忧的聘请流程。联系电话：+65 82935678'
        : 'Sunrise Link is Singapore\'s trusted helper agency providing verified domestic helpers, eldercare specialists, and childcare experts. 24/7 support, hassle-free process, and personalized care matching. Contact us at +65 82935678.'
      )
    }

    // 更新 meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', isZh
        ? '新加坡女佣中介, 女佣介绍所, 外籍女佣, 菲律宾女佣, 印尼女佣, 老人护理, 儿童看护, 家政服务, 帮佣中介'
        : 'helper agency Singapore, domestic helper agency, maid agency Singapore, foreign domestic worker, FDW agency, eldercare Singapore, childcare helper, home care services, trusted helper agency, verified helpers Singapore, domestic helper hiring'
      )
    }

    // 更新 Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', isZh
        ? '日升女佣 - 新加坡值得信赖的女佣中介'
        : 'Sunrise Link - Trusted Helper Agency in Singapore'
      )
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', isZh
        ? '关怀如晨曦，信任织纽带。在新加坡寻找经验证的女佣、老人护理专家和儿童看护。24/7支持，轻松聘请流程。'
        : 'A sunrise of care, a link of trust. Find verified domestic helpers, eldercare specialists, and childcare experts in Singapore. 24/7 support and hassle-free hiring process.'
      )
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) {
      ogLocale.setAttribute('content', isZh ? 'zh_CN' : 'en_SG')
    }

    // 更新 canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://sunriselink.sg${location.pathname}`)
    }
  }, [location])

  return null
}

function App() {
  return (
    <>
      <SEOMetaUpdater />
      <Routes>
        <Route path="/" element={<AppEn />} />
        <Route path="/zh" element={<AppZh />} />
      </Routes>
    </>
  )
}

export default App
