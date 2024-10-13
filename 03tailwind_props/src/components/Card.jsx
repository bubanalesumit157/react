import React from 'react'

function Card({username,role="role not specified"}){
    // console.log("props",props)
    console.log(username)
    return (
        
        <>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://imgs.search.brave.com/u3FUfiEc_iDQip6_Xv-rOV15GBFN6hsH_zAqDeu9Xig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODE4/MDIxMTgvcGhvdG8v/Y2xvc2V1cC1vZi1p/bWctZm91bmRlci1h/bmQtY2VvLW1hcmst/bWNjb3JtYWNrLWxp/Z29uaWVyLXBhLTgt/MTQtMTk2NS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YUNj/ZExpNjE4b19qSjNC/WjN4VTZyZGN6T25n/NmxmVXZHZlhIUVRx/RC1YST0" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. Its easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
        <div className="text-slate-700 dark:text-slate-50">
          {role }, Algolia
        </div>
    </figcaption>
  </div>
</figure>
        </>
    )
}

export default Card