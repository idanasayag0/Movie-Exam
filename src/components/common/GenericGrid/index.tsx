import { Grid } from "@mui/material";

type GenericGridProps<T> = {
    items: T[],
    component: React.ComponentType<{item: T}>
}

export const GenericGrid = <T extends {id: number}>({ items, component: Component}: GenericGridProps<T>) => {
  return (
    <Grid container spacing={2} sx={{ padding: "0 1rem" }}>
      {items.map((item: T) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={item.id}>
          <Component item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GenericGrid