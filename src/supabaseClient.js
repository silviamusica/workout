// Configura qui la tua chiave e url Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bedpuzzcazjdapopfgdp.supabase.co';
const supabaseKey = 'sb_publishable_ixzJDRNXNn77IvS3CcrdRw_VcsFzjEO';

export const supabase = createClient(supabaseUrl, supabaseKey);