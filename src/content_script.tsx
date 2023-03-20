// const myWin: CustomWindow = window as any
// const syncPost: any = myWin.syncPost

const btn = document.createElement('button')
btn.setAttribute('class', 'my-sync-btn-37hde73ye73')
btn.textContent = '同步'
const turndownService = new TurndownService()

document.querySelector('body')?.appendChild(btn)
console.log('=========> develop', $syncer)

btn.addEventListener('click', () => {
  console.log('============>window.$syncer', )
  if (!document.querySelectorAll('.markdown') || document.querySelectorAll('.markdown').length == 0) return alert(' 页面上暂无有需要同步的内容')
  const title = document.querySelector('.bg-gray-800')?.textContent
  let content = ''
  for (const item of document.querySelectorAll('.markdown')) {
    content += turndownService.turndown(item)
  }
  
  console.log('=========> str', content)
  syncPost({
    title,
    desc:'',
    content,
  })
})