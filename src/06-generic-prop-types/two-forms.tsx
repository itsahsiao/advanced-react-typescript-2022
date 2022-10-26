import { FC } from "react";
import { GenericForm } from "./generic-form";

export const TwoForms: FC = () => {
  return (
    <>
      <GenericForm
        header="User"
        initialValues={{
          firstName: "John",
          lastName: "Doe",
          birthDate: new Date(1990, 6, 10).toLocaleDateString(),
        }}
        onSubmit={(values) =>
          alert(
            `${values.firstName} ${values.lastName}\n\n${JSON.stringify(
              values,
              null,
              2
            )}`
          )
        }
      />

      <GenericForm
        header="Address"
        initialValues={{
          street: "Main St",
          houseNumber: "123",
          city: "New York",
        }}
        onSubmit={(values) =>
          alert(
            `${values.street} ${values.houseNumber} ${
              values.city
            }\n\n${JSON.stringify(values, null, 2)}`
          )
        }
      />
    </>
  );
};
