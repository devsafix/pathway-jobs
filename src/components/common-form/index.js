import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CommonForm = ({
  action,
  buttonText,
  btnType,
  isBtnDisabled,
  formControls,
  formData,
  setFormData,
  handleFileChange,
}) => {
  const renderInputByComponentType = (control) => {
    let content = null;
    switch (control.componentType) {
      case "input":
        content = (
          <>
            <Label
              htmlFor={control.name}
              className="w-full mt-4 flex flex-col items-start justify-start"
            >
              <h2>{control.label}</h2>
            </Label>
            <Input
              type="text"
              disabled={control.disabled}
              placeholder={control.placeholder}
              name={control.name}
              id={control.id}
              value={formData[control.name] || ""} 
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [control.name]: e.target.value,
                });
              }}
              className="w-full h-12 mt-2 rounded-lg border-2 border-gray-200 px-4"
            />
          </>
        );

        break;

      case "file":
        content = (
          <>
            <Label
              htmlFor={control.name}
              className="w-full mt-4 flex flex-col items-start justify-start"
            >
              <h2>{control.label}</h2>
            </Label>
            <Input
              type="file"
              id={control.name}
              onChange={handleFileChange}
              className="w-full h-12 mt-2 rounded-lg border-2 border-gray-200 px-4"
            />
          </>
        );
        break;

      default:
        content = (
          <Input
            type="text"
            disabled={control.disabled}
            placeholder={control.placeholder}
            name={control.name}
            id={control.id}
            value={formData[control.name]}
            onChange={(e) => {
              setFormData({
                ...formData,
                [control.name]: e.target.value,
              });
            }}
            className="w-full h-12 mt-2 rounded-lg border-2 border-gray-200 px-4"
          />
        );

        break;
    }

    return content;
  };

  return (
    <div>
      <form action={action} className="w-full">
        {formControls.map((control, index) => (
          <div key={control.id || control.name || index}>
            {renderInputByComponentType(control)}
          </div>
        ))}
        <div className="mt-6 w-full">
          <Button
            type={btnType || "submit"}
            disable={isBtnDisabled}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommonForm;
