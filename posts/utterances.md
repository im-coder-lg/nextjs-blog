---
title: 'Integrating Utterances'
date: '2021-10-09'
---

Now, let's get frank. Every blogger out there wants a simple, yet powerful comment system. And most of them get Disqus, since that is much better, but within a month, they get ads, and have to _pay_ for better features. So, we get a literal lot of comment systems for blogging. Those who use WordPress have better comment systems but on GitHub, it's an entire different story altogether. We use open-source comment systems. Now, isn't that big-brain?

Here, we use Utterances, the major open-source comment system that does it's job better than Disqus. And it's easy to install it on HTML-based SSGs like Jekyll, Hugo and it's likes.

But on JavaScript? You would feel pain to just install it. You _can't_ use HTML in the code, except in the production builds used for deployment and I tell ya, it's hard to implement it. But we did, in a simple way. Thanks to [Benjamin Carlson](https://github.com/bjcarlson), the founder of Coffee Class, in which he published the code in [here](https://www.coffeeclass.io/snippets/add-comments-to-nextjs-website) and _uploaded_ a [YouTube video](https://www.youtube.com/watch?v=Yi0AMpJXrJ0) on _how_ to add it.

But, he added it to the homepage, and I added it to the blog page.

How?

It is simple. Literally simple.

Now, I created this from the Next.js tutorial(link in homepage in case you wanna make it yourself) and I made a file called `[id].js`, inside the `pages/posts` directory where the posts are supposed to be.

I added the code needed to make the blogs appear as they are appearing now, and added the Utterances widget code there.

But how did I add the component?

Like I said above, on Benjamin Carlson's blog linked above, he put the Utterances code. I pasted it and added the `label` attribute, so that I don't get confused between issue and Utterances. I renamed the component name from `Comments` to `UCS`, short form of Utterances Comment System. Made it simple.

Then, I added the code inside the `[id].js` file. Previously, the main code was like this:

```js
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date datestring={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
      
    </Layout>
  )
}

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
```

I added an import like this:
```js
import UCS from '../../components/utterances' // UCS => Utterances Comment System
```
Added a comment for justification of the short form, and changed the code from that old one to this:
```js
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import UCS from '../../components/utterances' // UCS => Utterances Comment System

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date datestring={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
      </article>
      <UCS />
    </Layout>
  )
}

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
```

So, UCS added, no breaking changes, and voila! There you go, now _anyone_ can add it. Remember to add `<UCS />` inside your main HTML layout. This is not an official blog, this is to teach people how to add these easily.