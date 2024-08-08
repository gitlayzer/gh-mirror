import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Github from '@/assets/github-color.svg?react'
export function Home() {
  return (
    <div className='min-h-screen bg-gray-800 text-white'>
      <header className='flex items-center justify-between p-4 bg-gray-900'>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost' className='text-white'>
            gh-mirror
          </Button>
        </div>
        <nav className='flex space-x-4'>
          <a href='#' className='text-white'>
            首页
          </a>
          <a href='#' className='text-white'>
            推荐IPLC机场
          </a>
          <a href='#' className='text-white'>
            FRP内网穿透VIP服务
          </a>
          <a href='#' className='text-white'>
            RSS订阅VIP服务
          </a>
          <a href='#' className='text-white'>
            捐赠
          </a>
          <a href='#' className='text-white'>
            留言
          </a>
          <a href='#' className='text-white'>
            更多
          </a>
        </nav>
      </header>
      <main className='flex flex-col items-center p-8 space-y-8'>
        <div className='text-center'>
          <Github className='w-16 h-16 mx-auto' />
          <h1 className='mt-4 text-3xl font-bold'>GitHub Proxy</h1>
          <p className='mt-2 text-gray-400'>
            主要域名 ghproxy.com 已遭墙 GFW。已启用镜像站 mirror.ghproxy.com
            GitHub 文件. Releases, archive, gist, raw.githubusercontent.com
            文件代理加速下载服务.
          </p>
        </div>
        <div className='flex space-x-4'>
          <Input
            type='text'
            placeholder='输入 GitHub 文件链接'
            className='w-96 p-2 text-black'
          />
          <Button variant='default'>下载</Button>
        </div>
        <section className='w-full max-w-4xl p-8 bg-white text-black rounded-md'>
          <h2 className='text-2xl font-bold text-center'>使用说明</h2>
          <div className='mt-4 space-y-4'>
            <p className='text-red-600'>
              重要通知: 由于主域名 ghproxy.com 已遭墙 GFW，请更换为
              mirror.ghproxy.com 二级域名。
            </p>
            <p className='text-red-600'>
              好文分享: RedteaGO -
              最划算的大陆游戏专用流量卡，原生境外IP，法制解锁3刀。
            </p>
            <p>
              推广合作: 推荐两个晚高峰4K非常稳定的IPLC机场，均全全球解锁流媒体和
              chatGP t，如果你有需求的朋友或者家人均可以通过我的
              <a href='#' className='text-blue-600'>
                推广链接1
              </a>
              /
              <a href='#' className='text-blue-600'>
                推广链接2
              </a>
              完成注册，免费试用后在充值购买返还三倍的推荐者。
            </p>
            <p className='text-red-600'>
              特别鸣谢:
              感谢所有打赏过的用户，你们的支持将给本站提供更稳定的服务。
            </p>
          </div>
        </section>
        <section className='w-full max-w-4xl p-8 bg-white text-black rounded-md'>
          <h2 className='text-2xl font-bold'>终端命令行</h2>
          <p className='mt-4'>
            支持终端命令行 git clone, wget, curl 等工具下载。 支持
            <a href='#' className='text-blue-600'>
              www.githubusercontent.com
            </a>
            ,
            <a href='#' className='text-blue-600'>
              gist.github.com
            </a>
            ,
            <a href='#' className='text-blue-600'>
              gist.githubusercontent.com
            </a>
            文件下载。 注意：不支持 SSH Key 方式 git clone 下载。
          </p>
          <div className='mt-4 space-y-4'>
            <div>
              <p className='font-bold'>git clone</p>
              <p className='text-green-600'>
                git clone
                https://mirror.ghproxy.com/https://github.com/stilleshan/dockerfiles
              </p>
            </div>
            <div>
              <p className='font-bold'>git clone 私有仓库</p>
              <p>
                Clone 私有仓库需要用产生
                <a href='#' className='text-blue-600'>
                  Personal access tokens
                </a>
                替换 Token 里全使用。
              </p>
              <p className='text-green-600'>
                git clone
                https://user:your_token@mirror.ghproxy.com/https://github.com/your_name/your_private_repo
              </p>
            </div>
            <div>
              <p className='font-bold'>wget & curl</p>
              <p className='text-green-600'>
                wget
                https://mirror.ghproxy.com/https://github.com/stilleshan/dockerfiles/archive/master.zip
              </p>
              <p className='text-green-600'>
                wget
                https://mirror.ghproxy.com/https://raw.githubusercontent.com/stilleshan/dockerfiles/main/README.md
              </p>
              <p className='text-green-600'>
                curl -O
                https://mirror.ghproxy.com/https://github.com/stilleshan/dockerfiles/archive/master.zip
              </p>
              <p className='text-green-600'>
                curl -O
                https://mirror.ghproxy.com/https://raw.githubusercontent.com/stilleshan/dockerfiles/main/README.md
              </p>
            </div>
          </div>
        </section>
        <section className='w-full max-w-4xl p-8 bg-white text-black rounded-md'>
          <h2 className='text-2xl font-bold'>首页下载</h2>
          <p className='mt-4'>
            在本页地址栏输入合适链接（参见以下链接）点击下载按钮 支持
            <a href='#' className='text-blue-600'>
              raw.githubusercontent.com
            </a>
            ,
            <a href='#' className='text-blue-600'>
              gist.github.com
            </a>
            ,
            <a href='#' className='text-blue-600'>
              gist.githubusercontent.com
            </a>
            文件下载。
          </p>
          <div className='mt-4 space-y-4'>
            <div>
              <p className='font-bold'>Raw 文件</p>
              <p>
                https://www.githubusercontent.com/stilleshan/dockerfiles/main/README.md
              </p>
            </div>
            <div>
              <p className='font-bold'>分支源码</p>
              <p>
                https://github.com/stilleshan/dockerfiles/archive/master.zip
              </p>
            </div>
            <div>
              <p className='font-bold'>Releases 源码</p>
              <p>
                https://github.com/fatedier/frp/archive/refs/tags/v0.54.0.zip
              </p>
            </div>
            <div>
              <p className='font-bold'>Releases 文件</p>
              <p>
                https://github.com/fatedier/frp/releases/download/v0.54.0/frp_0.54.0_linux_amd64.tar.gz
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex items-center justify-between p-4 bg-gray-900'>
        <p>© ghproxy.com. All rights reserved.</p>
        <p>
          Github Project:
          <a href='#' className='text-blue-600'>
            hunshcn/gh-proxy
          </a>
        </p>
      </footer>
    </div>
  )
}
