import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
const Logo = <>
  <img alt="vcdp logo" src="https://image.liuyongzhi.cn/vcdp/favicon.ico" width={20} height={20} style={{ borderRadius: '50%' }} />
  <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Vcdp
  </span>
  </>
const Head = <>
  <link rel="icon" href="https://image.liuyongzhi.cn/vcdp/favicon.ico" />
</>
const config: DocsThemeConfig = {
  logo: Logo,
  head: Head,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – VCDP'
    }
  },
  project: {
    link: 'https://github.com/overdev-l/vcdp',
  },
  docsRepositoryBase: 'https://github.com/overdev-l/vcdpdocs',
  banner: {
    text: "Vcdp 目前还处在开发阶段"
  },
  footer: {
    text: '',
  },
}

export default config
