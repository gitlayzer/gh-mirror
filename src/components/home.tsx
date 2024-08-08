import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Github from '@/assets/github-color.svg?react'

function OpenDockerMirror() {
  return (
    window.open('https://registry.devops-engineer.com.cn')
  )
}

function OpenGithubMirrors(url: string) {
  if (!url) {
    return;
  }
  return (
    window.open(`https://git.cloudimages.asia/${url}`)
  )
}

const DownLoad = () => {
  const url = (document.querySelector('input') as HTMLInputElement).value;
  OpenGithubMirrors(url);
}

export function Home() {
  return (
    <div className='min-h-screen bg-gray-800 text-white'>
      <header className='flex items-center justify-between p-4 h-16 bg-gray-900'>
        <div className='flex items-center space-x-4'>
          <Button variant='ghost' className='text-white' size={'default'}>
            Github Mirror
          </Button>
          <Button variant='ghost' className='text-white' onClick={OpenDockerMirror}>
            Docker Mirror
          </Button>
        </div>
      </header>
      <main className='flex flex-col items-center p-8 space-y-8'>
        <div className='text-center'>
          <Github className='w-16 h-16 mx-auto'/>
          <h1 className='mt-4 text-3xl font-bold'>GitHub Mirror</h1>
          <p className='mt-2 text-gray-400'>
            GitHub 文件 , Releases , archive , gist , raw.githubusercontent.com 文件代理加速下载服务.
          </p>
        </div>
        <div className='flex space-x-5'>
          <Input
              type='text'
              placeholder='输入 GitHub 文件链接'
              className='w-96 p-3 h-15 text-white bg-gray-800 rounded-md border-none border-gray-700 focus:outline-none'
          />
          <Button variant='default' onClick={DownLoad} size={'default'} className='w-15 h-15'>下载</Button>
        </div>
        <section className='w-full max-w-4xl p-8 bg-white text-black rounded-md'>
          <h2 className='text-2xl font-bold text-center'>使用说明</h2>
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

            <p className='text-red-600'>
              注意：不支持 SSH-Key 方式 Clone 仓库
            </p>
          </p>
          <div className='mt-4 space-y-4'>
            <div>
              <p className='font-bold'>git clone</p>
              <p className='text-green-600'>
                git clone
                https://git.cloudimages.asia/https://github.com/xxxxxx/xxxxxx.git
              </p>
            </div>
            <div>
              <p className='font-bold'>git clone 私有仓库</p>
              <p className='text-green-600'>
                git clone
                https://user:your_token@git.cloudimages.asia/https://github.com/xxxxxx/xxxxxx.git
              </p>
            </div>
            <div>
              <p className='font-bold'>wget & curl</p>
              <p className='text-green-600'>
                wget
                https://git.cloudimages.asia/https://github.com/xxxxxx/xxxxxx/raw/master/xxxxxx.zip
              </p>
              <p className='text-green-600'>
                wget
                https://git.cloudimages.asia/https://raw.githubusercontent.com/xxxxxx/xxxxxx/master/xxxxxx.zip
              </p>
              <p className='text-green-600'>
                curl -O
                https://git.cloudimages.asia/https://github.com/xxxxxx/xxxxxx/raw/master/xxxxxx.zip
              </p>
              <p className='text-green-600'>
                curl -O
                https://git.cloudimages.asia/https://raw.githubusercontent.com/xxxxxx/xxxxxx/master/xxxxxx.zip
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
        </section>
        <section className='w-full max-w-4xl p-8 bg-white text-black rounded-md'>
          <h2 className='text-2xl font-bold text-center'>特别鸣谢</h2>
          <div className='mt-4 space-y-4'>
            <a href='https://github.com/aide-cloud/' className='text-blue-500'>Moon</a><br/>
            <a href='https://github.com/gitlayzer/' className='text-blue-500'>Layzer</a>
          </div>
        </section>
      </main>
      <footer className='flex items-center justify-between p-4 bg-gray-900'>
        <p>© Github-Mirror. All rights reserved.</p>
      </footer>
    </div>
  )
}
