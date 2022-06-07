import { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../server/prismic'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo dweifoe mvcpeom eedcvedved</strong>
            <p>ferwimnfcvoeirnvoienfdvo edfvopi jefdpov iedfpvo jepdfovj cepdfo vpdf </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo dweifoe mvcpeom eedcvedved</strong>
            <p>ferwimnfcvoeirnvoienfdvo edfvopi jefdpov iedfpvo jepdfovj cepdfo vpdf </p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo dweifoe mvcpeom eedcvedved</strong>
            <p>ferwimnfcvoeirnvoienfdvo edfvopi jefdpov iedfpvo jepdfovj cepdfo vpdf </p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  // console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}