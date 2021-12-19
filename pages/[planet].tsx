import type { NextPage, InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next'
import { groq } from 'next-sanity'
import { Planet, Slug } from '../lib/interfaces';
import { usePreviewSubscription } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';
import Background from '../components/layout/background/index';
import dynamic from 'next/dynamic'
import React from 'react';
import MainContent from '../components/utils/mainContent';
import PlanetInfo from '../components/utils/planetInfo';

const NavBar = dynamic(
  () => import('../components/layout/navbar/index'),
  { ssr: false },
)

export const getStaticPaths: GetStaticPaths = async () => {
    const query = groq`*[_type=="planet" && defined(slug.current)][].slug.current`;
    const allPages = await getClient(false).fetch(query);
    return {
        paths: allPages.map((slug: string) => `/${slug}`),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params, preview}) => {
    if(!params){
        return {
            notFound: true
        };
    }

    const query = groq`*[_type == "planet" && slug.current == $slug][0]`;
    const queryParams = {slug: params.planet};
    const query2 = groq`*[_type=="planet" && defined(slug.current)][]{'slug': slug.current, 'color': {'main': mainColor.value, 'secondary': secondaryColor.value}}`;
    let planet = null;
    let allPlanets = null;

    try {
        planet = await getClient(preview ?? false).fetch(query, queryParams);
        allPlanets = await getClient(preview ?? false).fetch(query2);
    } catch (err) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            preview: preview || false,
            data: {planet, query, queryParams, allPlanets}
        },
    }
}

const Planet: NextPage = ({ data, preview }: InferGetStaticPropsType<typeof getStaticProps>) => {
    // const previewData = usePreviewSubscription(data?.query, {
    //     params: data?.queryParams ?? {},
    //     initialData: data?.planet,
    //     enabled: preview
    // })

    const planet = data.planet as Planet;
    const allPlanetSlugs = data.allPlanets;
  return (
    <Background className={`flex flex-col justify-between`}>
        <NavBar allPlanets={allPlanetSlugs} />
        <div className={`container h- mx-auto px-42 flex flex-col justify-between`}>
            <MainContent planet={planet} preview={preview} />
            <PlanetInfo planet={planet} />
        </div>
    </Background>
  )
}

export default Planet
