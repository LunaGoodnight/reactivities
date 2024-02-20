import { useGetItemListQuery } from "../../services/item";
import { Item } from "./Item";



export const AnythingDashboard = () => {
  const { data } = useGetItemListQuery();



  return (

    <div>

      <div></div>
      <div>
        {data
            ? data.map(({ id, name, description }) => {
              return (
                  <Item key={id} id={id} name={name} description={description} />
              );
            })
            : null}
      </div>

    </div>
  );
};
