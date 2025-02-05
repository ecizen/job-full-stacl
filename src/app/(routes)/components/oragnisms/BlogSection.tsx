import CardBlog from "../molecules/CardBlog";

const BlogSection = () => {
    return (
        <section className="w-full max-w-7xl min-h-screen lg:px-12 px-6 py-8">
            <div>
                <h3 className=" uppercase text-sm  text-[#5E46FE] font-medium">FROM The Blog</h3>
                <h1 className="text-4xl mt-4 font-semibold">Latest Blog Posts</h1>
                <p className="max-w-sm leading-relaxed mt-2 text-xs text-gray-600">Exclusive articles to help you find opportunities, sharpen skills, and achieve your professional dreams.</p>
            </div>
            <article className="w-full   py-6">
                <CardBlog/>
            </article>
        </section>
    )
}

export default BlogSection;