import { useRouter } from "next/router";

const Subcategory = () => {
    const router = useRouter();
    const { id } = router.query;

    return <p>Subcategory: {id}</p>;
};

export default Subcategory;
