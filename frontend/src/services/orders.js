/**
 * Created by paranoia on 2017/11/23.
 */
import config from '../config';

export async function query() {
  console.log(`${config.domain}/products?page=0&all=false`);
  // request(`${config.domain}/products?page=0&all=false`);
}
