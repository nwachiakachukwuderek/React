import React from 'react'

// you can destructure props directly by adding in curly braces that way you dont have to to use porps you va add any value
function Card({username = " HC ", post = "Not Assingned Yet", myArr = "" }) {
  // console.log(props)
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="data:image/webp;base64,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" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              `“Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”`
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username || 'Sarah Dayan'}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
              
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Card