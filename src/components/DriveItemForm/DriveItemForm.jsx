
import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const DriveItemForm = ({ drive }) => {
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        shipmentDate: drive.shipmentDate,
        unloadingDate: drive.unloadingDate,
        carrier: drive.carrier,
        client: drive.client,
        departurePoint: drive.departurePoint,
        arrivalPoint: drive.arrivalPoint,
        vehicleData: drive.vehicleData,
      },
    });

    return (
      <div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <ul>
            <li>
              <label>Shipment date</label>
              <input
                {...register("shipmentDate", { required: true })}
                disabled={!isEditEnabled}
              />
            </li>
            <li>
              <label>Unloading date</label>
              <input
                {...register("unloadingDate", { required: true })}
                disabled={!isEditEnabled}
              />
            </li>
            <li>
              <label>Carrier</label>
              <input
                {...register("carrier", { required: true })}
                disabled={!isEditEnabled}
              />
            </li>
            <li>
              <label>Client</label>
              <input
                {...register("client", { required: true })}
                disabled={!isEditEnabled}
              />
            </li>
            <li>
              <label>Departure point</label>
              <input
                {...register("departurePoint", { required: true })}
                disabled={!isEditEnabled}
              />
            </li>
            <li>
              <label>Arrival point</label>
              <input
                {...register("arrivalPoint", { required: true })}
                disabled={!isEditEnabled}
              />
            </li>
            <li>
              <label>Vehicle data</label>
              <input
                {...register("vehicleData", { required: true })}
                disabled={!isEditEnabled}
              />
            </li>
                </ul>
                <button type="button" onClick={() => setIsEditEnabled((state) => (!state))}>{isEditEnabled ? "Save" : "Edit"}</button>
                <button type="submit">Submit Form</button>
        </form>
      </div>
    );
}

DriveItemForm.propTypes = {
  drive: PropTypes.object.isRequired,
};

export default DriveItemForm;