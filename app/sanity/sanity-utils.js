import groq from "groq";
import { client } from "./sanity";

export async function getDashboardProject(visibility) {
  return client.fetch(
    groq`*[_type == "project"][0..1]{
      _id,
        _createdAt,
        title,
        publishedAt,
        visibility,
        contentType,
        "slug": slug.current,
        mainImage,
        videoURL,
    } | order(publishedAt desc)`,
    { visibility }
  );
}
export async function getDashboardBlog(visibility) {
  return client.fetch(
    groq`*[_type == "blog"][0..1]{
      _id,
      _createdAt,
      title,
      shortDesc,
      publishedAt,
      tags[]->{...,tags},
      visibility,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
    } | order(publishedAt desc)`,
    { visibility }
  );
}

export async function getBlogs(visibility) {
  return client.fetch(
    groq`*[_type == "blog" && visibility == $visibility]{
        _id,
        _createdAt,
        title,
        shortDesc,
        publishedAt,
        tags[]->{...,tags},
        visibility,
        "slug": slug.current,
      } | order(publishedAt desc)`,
    { visibility }
  );
}

export async function getBlogsVis(visibility) {
  return client.fetch(
    groq`*[_type == "blog" && visibility = $visibility]{
        _id,
        _createdAt,
        title,
        body,
        publishedAt,
        tags[]->{...,tags},
        visibility,
        "slug": slug.current,
      }`,
    { visibility }
  );
}

export async function getBlog(slug, visibility) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        title,
        publishedAt,
        tags[]->{...,tags},
        visibility,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
        body,
        "parallaxImage": parallaxImage.asset->url,
        "parallaxImageAlt": parallaxImage.alt,
        "parallaxImageText": parallaxImage.text,
        bodyParallax
      }`,
    { slug, visibility }
  );
}

export async function getBlogView(slug, visibility) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        title,
        publishedAt,
        tags[]->{...,tags},
        visibility,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
        body,
        "parallaxImage": parallaxImage.asset->url,
        "parallaxImageAlt": parallaxImage.alt,
        "parallaxImageText": parallaxImage.text,
        bodyParallax
      }`,
    { slug, visibility }
  );
}

export async function getProjects(visibility) {
  return client.fetch(
    groq`*[_type == "project" && visibility == $visibility]{
        _id,
        _createdAt,
        title,
        publishedAt,
        visibility,
        contentType,
        "slug": slug.current,
        mainImage,
        videoURL,
      }`,
    { visibility }
  );
}

export async function getProject(slug, visibility) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        title,
        publishedAt,
        shortDesc,
        link,
        visibility,
        contentType,
        "slug": slug.current,
        mainImage,
        videoURL,
      }`,
    { slug, visibility }
  );
}

export async function getProjectOverview(slug, visibility) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        problem,
        projectColor,
        font,
      }`,
    { slug, visibility }
  );
}
export async function getProjectDevelopment(slug, visibility) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        description,
        tools[]->{...,"icon": icon.asset->url,"iconAlt": icon.alt},
      }`,
    { slug, visibility }
  );
}
export async function getProjectGallery(slug, visibility) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        "imagesGallery": imagesGallery[] {
          ...,
          'url':asset->url,
        },
        videoGallery,
      }`,
    { slug, visibility }
  );
}
export async function getProjectSlug() {
  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
      }`
  );
}

export async function getProjectView(slug, visibility) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        title,
        publishedAt,
        tags[]->{...,tags},
        visibility,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
        body,
        "parallaxImage": parallaxImage.asset->url,
        "parallaxImageAlt": parallaxImage.alt,
        "parallaxImageText": parallaxImage.text,
        bodyParallax
      }`,
    { slug, visibility }
  );
}

export async function getServices(visibility) {
  return client.fetch(
    groq`*[_type == "services" && visibility == $visibility]{
        _id,
        _createdAt,
        title,
        publishedAt,
        shortDesc,
        visibility,
        svg,
        "slug": slug.current,
      }`,
    { visibility }
  );
}

export async function getService(slug, visibility) {
  return client.fetch(
    groq`*[_type == "services" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        title,
        publishedAt,
        shortDesc,
        visibility,
        "slug": slug.current,
        services,
      }`,
    { slug, visibility }
  );
}

export async function getServiceSlug() {
  return client.fetch(
    groq`*[_type == "services"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
      }`
  );
}

export async function getServiceView(slug, visibility) {
  return client.fetch(
    groq`*[_type == "services" && slug.current == $slug && visibility == $visibility][0]{
        _id,
        _createdAt,
        title,
        publishedAt,
        tags[]->{...,tags},
        visibility,
        "slug": slug.current,
        "imageUrl": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
        body,
        "parallaxImage": parallaxImage.asset->url,
        "parallaxImageAlt": parallaxImage.alt,
        "parallaxImageText": parallaxImage.text,
        bodyParallax
      }`,
    { slug, visibility }
  );
}
