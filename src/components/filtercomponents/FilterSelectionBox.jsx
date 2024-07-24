import React from "react";

function FilterSelectionBox() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-12">
        <select name="CateId1" className="form-select" id="selATP">
          <option value="13" defaultValue title="Fittings">
            Fittings
          </option>

          <option value="14" title="Valves">
            Valves
          </option>

          <option value="15" title="Manifolds">
            Manifolds
          </option>

          <option value="16" title="Filters">
            Filters
          </option>

          <option value="17" title="Quick-Connects">
            Quick-Connects
          </option>

          <option value="18" title="Hoses and Connectors">
            Hoses and Connectors
          </option>

          <option value="20" title="Tubing">
            Tubing
          </option>

          <option value="599" title="Sampling Systems">
            Sampling Systems
          </option>

          <option value="22" title="Tooling">
            Tooling
          </option>

          <option value="19" title="Subsea Products">
            Subsea Products
          </option>

          <option value="661" title="Pressure Regulators">
            Pressure Regulators
          </option>

          <option value="23" title="Others">
            Others
          </option>
        </select>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <select name="CateId2" className="form-select" id="selCN2">
          <option value="24" title="6D Series Tube Fittings">
            6D Series Tube Fittings
          </option>

          <option value="83" title="20D Series Tube Fittings">
            20D Series Tube Fittings
          </option>

          <option value="90" title="Face Seal Fittings">
            Face Seal Fittings
          </option>

          <option value="85" title="60H Series High Pressure Fittings">
            60H Series High Pressure Fittings
          </option>

          <option value="84" title="20M Series Medium Pressure Fittings">
            20M Series Medium Pressure Fittings
          </option>

          <option value="26" title="6W Series Weld Fittings">
            6W Series Weld Fittings
          </option>

          <option value="88" title="UHP Weld Fittings">
            UHP Weld Fittings
          </option>

          <option value="25" title="6P Series Pipe Fittings">
            6P Series Pipe Fittings
          </option>

          <option value="86" title="PMH Series Pipe Fittings">
            PMH Series Pipe Fittings
          </option>

          <option value="80" title="Grease Fittings">
            Grease Fittings
          </option>

          <option value="81" title="Fusible Plugs">
            Fusible Plugs
          </option>

          <option value="33" title="VL Series Vacuum Tube Fittings">
            VL Series Vacuum Tube Fittings
          </option>

          <option value="32" title="VA Series Vacuum Adapter Fittings">
            VA Series Vacuum Adapter Fittings
          </option>

          <option value="87" title="AMH Series Adapter Fittings">
            AMH Series Adapter Fittings
          </option>

          <option value="31" title="37° Flared Tube Fittings">
            37° Flared Tube Fittings
          </option>

          <option value="89" title="Cylinder Connections">
            Cylinder Connections
          </option>

          <option value="597" title="6S Series Single Ferrule Tube Fittings">
            6S Series Single Ferrule Tube Fittings
          </option>
        </select>
      </div>
      <div className="col-lg-4 col-md-6 col-12">
        <select name="CateId3" className="form-select" id="selS5G">
          <option value="27" title="Straight Connectors" link="">
            Straight Connectors
          </option>

          <option value="28" title="Elbows" link="">
            Elbows
          </option>

          <option value="29" title="Tees" link="">
            Tees
          </option>

          <option value="73" title="Union Crosses - C" link="">
            Union Crosses - C
          </option>

          <option value="74" title="Others" link="">
            Others
          </option>
        </select>
      </div>
    </div>
  );
}

export default FilterSelectionBox;
