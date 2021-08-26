import { useSelector } from "react-redux";

<link
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  rel="stylesheet"
/>;

const Invoice = ({ auctions }) => {
  const { user } = useSelector((state) => state.user);
  
  return (
  <div className="postion">
    <div class="page-content container">
      <div class="page-header text-blue-d2">
        <h1 class="page-title text-secondary-d1">
          Invoice
          <small class="page-info">
            <i class="fa fa-angle-double-right text-80"></i>
            ID: #111-222
          </small>
        </h1>
      </div>

      <div class="container px-0">
        <div class="row mt-4">
          <div class="col-12 col-lg-10 offset-lg-1">
            <div class="row">
              <div class="col-12">
                <div class="text-center text-150">
                  <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                  <span class="text-default-d3">Mazad.com</span>
                </div>
              </div>
            </div>

            <hr class="row brc-default-l1 mx-n1 mb-4" />

            <div class="row">
              <div class="col-sm-6">
                <div>
                  <span class="text-sm text-grey-m2 align-middle">To:</span>
                  <span class="text-600 text-110 text-blue align-middle">
                    {user.username}{" "}
                  </span>
                </div>
                <div class="text-grey-m2">
                  <div class="my-1">Amman, Jordan</div>
                  <div class="my-1">
                    <i class="fa fa-phone fa-flip-horizontal text-secondary"></i>{" "}
                    <b class="text-600">{user.phoneNum}</b>
                  </div>
                </div>
              </div>

              <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                <hr class="d-sm-none" />
                <div class="text-grey-m2">
                  <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                    Invoice
                  </div>

                  <div class="my-2">
                    <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                    <span class="text-600 text-90">ID:</span> #111-222
                  </div>

                  <div class="my-2">
                    <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                    <span class="text-600 text-90">Issue Date:</span> Oct 12,
                    2019
                  </div>

                  <div class="my-2">
                    <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                    <span class="text-600 text-90">Status:</span>{" "}
                    <span class="badge badge-warning badge-pill px-25">
                      Unpaid
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <div class="row text-600 text-white bgc-default-tp1 py-25">
                <div class="d-none d-sm-block col-1">#</div>
                <div class="col-9 col-sm-5"><p></p></div>
                <div class="d-none d-sm-block col-4 col-sm-2">Qty</div>
                <div class="d-none d-sm-block col-sm-2">Unit Price</div>
                <div class="col-2">Amount</div>
              </div>

              <div class="text-95 text-secondary-d3">
                <div class="row mb-2 mb-sm-0 py-25">
                  <div class="d-none d-sm-block col-1">#</div>
                  <div class="col-9 col-sm-5">Description</div>
                  <div class="d-none d-sm-block col-2 text-95">Price</div>
                  <div class="col-2 text-secondary-d2">Price</div>
                </div>

                <div class="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                  <div class="d-none d-sm-block col-1">1</div>
                  <div class="col-9 col-sm-5">Web hosting</div>
                  <div class="d-none d-sm-block col-2">1</div>
                  <div class="d-none d-sm-block col-2 text-95">$15</div>
                  <div class="col-2 text-secondary-d2">$15</div>
                </div>

            

          
              </div>


              <div class="table-responsive">
                <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                  <thead class="bg-none bgc-default-tp1">
                    <tr class="text-white">
                      <th class="opacity-2">#</th>
                      <th>Description</th>
                      <th>Qty</th>
                      <th>Unit Price</th>
                      <th width="140">Amount</th>
                    </tr>
                  </thead>

                </table>
              </div>

              <div class="row mt-3">
                <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                  Extra note such as company or payment information...
                </div>

                <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                  <div class="row my-2">
                    <div class="col-7 text-right">SubTotal</div>
                    <div class="col-5">
                      <span class="text-120 text-secondary-d1">$2,250</span>
                    </div>
                  </div>

                  <div class="row my-2">
                    <div class="col-7 text-right">Tax (10%)</div>
                    <div class="col-5">
                      <span class="text-110 text-secondary-d1">$225</span>
                    </div>
                  </div>

                  <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                    <div class="col-7 text-right">Total Amount</div>
                    <div class="col-5">
                      <span class="text-150 text-success-d3 opacity-2">
                        $2,475
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div>
           
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Invoice;
